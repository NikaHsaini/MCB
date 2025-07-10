#!/usr/bin/env python3
import os
import sys
import subprocess
import webbrowser
import time
import signal
import threading
from pathlib import Path
import http.server
import socketserver
import json
from functools import partial

# Couleurs pour les messages dans le terminal
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

# Afficher le titre
print(f"{Colors.HEADER}{'=' * 60}{Colors.ENDC}")
print(f"{Colors.HEADER}{Colors.BOLD}🏦 MyCryptoBank Dashboard Unifié - Lanceur{Colors.ENDC}")
print(f"{Colors.HEADER}{'=' * 60}{Colors.ENDC}")

# Vérifier si Node.js est installé
try:
    node_version = subprocess.check_output(['node', '--version']).decode().strip()
    print(f"{Colors.GREEN}✅ Node.js {node_version} détecté{Colors.ENDC}")
except:
    print(f"{Colors.FAIL}❌ Node.js n'est pas installé. Veuillez l'installer pour continuer.{Colors.ENDC}")
    sys.exit(1)

# Vérifier si npm est installé
try:
    npm_version = subprocess.check_output(['npm', '--version']).decode().strip()
    print(f"{Colors.GREEN}✅ npm {npm_version} détecté{Colors.ENDC}")
except:
    print(f"{Colors.FAIL}❌ npm n'est pas installé. Veuillez l'installer pour continuer.{Colors.ENDC}")
    sys.exit(1)

# Obtenir le chemin du script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Fonction pour installer les dépendances
def install_dependencies():
    print(f"\n{Colors.BLUE}📦 Installation des dépendances...{Colors.ENDC}")
    try:
        # Première tentative avec --legacy-peer-deps
        subprocess.check_call(['npm', 'install', '--legacy-peer-deps'], cwd=script_dir)
        return True
    except subprocess.CalledProcessError:
        print(f"{Colors.WARNING}⚠️ Échec de l'installation avec --legacy-peer-deps, tentative avec --force...{Colors.ENDC}")
        try:
            # Deuxième tentative avec --force
            subprocess.check_call(['npm', 'install', '--force'], cwd=script_dir)
            return True
        except subprocess.CalledProcessError:
            print(f"{Colors.FAIL}❌ Échec de l'installation des dépendances{Colors.ENDC}")
            return False

# Fonction pour démarrer le serveur de développement React
def start_react_server():
    print(f"\n{Colors.BLUE}🚀 Démarrage du serveur de développement React...{Colors.ENDC}")
    try:
        # Utiliser npm run dev pour démarrer le serveur Vite
        process = subprocess.Popen(['npm', 'run', 'dev'], cwd=script_dir)
        return process
    except Exception as e:
        print(f"{Colors.FAIL}❌ Échec du démarrage du serveur React: {str(e)}{Colors.ENDC}")
        return None

# Fonction pour ouvrir le navigateur
def open_browser(url, delay=3):
    def _open_browser():
        time.sleep(delay)  # Attendre que le serveur démarre
        print(f"\n{Colors.GREEN}🌐 Ouverture du dashboard dans le navigateur...{Colors.ENDC}")
        webbrowser.open(url)
    
    thread = threading.Thread(target=_open_browser)
    thread.daemon = True
    thread.start()

# Fonction pour gérer l'arrêt propre des processus
def handle_exit(react_process):
    def signal_handler(sig, frame):
        print(f"\n{Colors.BLUE}🛑 Arrêt des serveurs...{Colors.ENDC}")
        if react_process:
            react_process.terminate()
        print(f"{Colors.GREEN}✅ Serveurs arrêtés. Au revoir!{Colors.ENDC}")
        sys.exit(0)
    
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

# Fonction principale
def main():
    # Installer les dépendances
    if not install_dependencies():
        return
    
    # Démarrer le serveur React
    react_process = start_react_server()
    if not react_process:
        return
    
    # Ouvrir le navigateur après un délai
    open_browser("http://localhost:3000")
    
    # Gérer l'arrêt propre
    handle_exit(react_process)
    
    print(f"\n{Colors.BLUE}💻 Serveur unifié en cours d'exécution. Appuyez sur Ctrl+C pour arrêter.{Colors.ENDC}")
    print(f"{Colors.GREEN}✅ QBTC est accessible depuis le menu principal.{Colors.ENDC}")
    
    # Attendre que le processus React se termine
    try:
        react_process.wait()
    except KeyboardInterrupt:
        pass
    finally:
        # S'assurer que tous les processus sont arrêtés
        if react_process:
            react_process.terminate()

if __name__ == "__main__":
    main()
