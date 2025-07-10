import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/Wallet.css";

// Données fictives pour le graphique
const data = [
  { name: 'Jan', value: 1200 },
  { name: 'Fév', value: 1900 },
  { name: 'Mar', value: 1500 },
  { name: 'Avr', value: 2400 },
  { name: 'Mai', value: 2100 },
  { name: 'Juin', value: 3200 },
  { name: 'Juil', value: 2800 },
];

// Données fictives pour les actifs
const assets = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', amount: 0.45, value: 28500, change: 2.4 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', amount: 3.2, value: 6200, change: -1.2 },
  { id: 3, name: 'Solana', symbol: 'SOL', amount: 25, value: 2800, change: 5.7 },
  { id: 4, name: 'Cardano', symbol: 'ADA', amount: 1500, value: 1200, change: 0.8 },
];

const Wallet: React.FC = () => {
  // Calculer la valeur totale du portefeuille
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  
  return (
    <div className="wallet-container">
      <h1 className="wallet-title">Mon Portefeuille</h1>
      
      <div className="wallet-overview">
        <Card>
          <CardHeader>
            <CardTitle>Valeur Totale</CardTitle>
            <CardDescription>Valeur actuelle de tous vos actifs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="wallet-balance">
              <span className="balance-amount">{totalValue.toLocaleString()} €</span>
              <span className="balance-change positive">+4.2% cette semaine</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Évolution du Portefeuille</CardTitle>
            <CardDescription>Performance sur les 7 derniers mois</CardDescription>
          </CardHeader>
          <CardContent className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#FF3E8F" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="assets" className="wallet-tabs">
        <TabsList>
          <TabsTrigger value="assets">Mes Actifs</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="staking">Staking</TabsTrigger>
        </TabsList>
        
        <TabsContent value="assets">
          <Card>
            <CardHeader>
              <CardTitle>Mes Crypto-monnaies</CardTitle>
              <CardDescription>Liste de vos actifs numériques</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="assets-list">
                <div className="assets-header">
                  <span>Actif</span>
                  <span>Quantité</span>
                  <span>Valeur</span>
                  <span>Évolution 24h</span>
                </div>
                
                {assets.map(asset => (
                  <div key={asset.id} className="asset-item">
                    <div className="asset-name">
                      <div className="asset-icon">{asset.symbol.charAt(0)}</div>
                      <div>
                        <div className="asset-full-name">{asset.name}</div>
                        <div className="asset-symbol">{asset.symbol}</div>
                      </div>
                    </div>
                    <div className="asset-amount">{asset.amount}</div>
                    <div className="asset-value">{asset.value.toLocaleString()} €</div>
                    <div className={`asset-change ${asset.change >= 0 ? 'positive' : 'negative'}`}>
                      {asset.change >= 0 ? '+' : ''}{asset.change}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <button className="wallet-button primary">Ajouter un actif</button>
              <button className="wallet-button secondary">Exporter</button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Historique des Transactions</CardTitle>
              <CardDescription>Vos transactions récentes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="placeholder-content">Historique des transactions à implémenter</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="staking">
          <Card>
            <CardHeader>
              <CardTitle>Options de Staking</CardTitle>
              <CardDescription>Générez des revenus passifs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="placeholder-content">Options de staking à implémenter</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Wallet;
