import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import "../styles/Swap.css";

const Swap: React.FC = () => {
  return (
    <div className="swap-container">
      <h1 className="swap-title">Échange de Crypto-monnaies</h1>
      
      <div className="swap-card-container">
        <Card className="swap-card">
          <CardHeader>
            <CardTitle>Échanger des Crypto-monnaies</CardTitle>
            <CardDescription>Échangez instantanément entre différentes crypto-monnaies</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="swap" className="swap-tabs">
              <TabsList>
                <TabsTrigger value="swap">Swap</TabsTrigger>
                <TabsTrigger value="limit">Ordre Limite</TabsTrigger>
                <TabsTrigger value="pool">Liquidité</TabsTrigger>
              </TabsList>
              
              <TabsContent value="swap">
                <div className="swap-form">
                  <div className="swap-input-container">
                    <div className="swap-input-header">
                      <span>De</span>
                      <span className="swap-balance">Solde: 0.45 BTC</span>
                    </div>
                    <div className="swap-input-group">
                      <input type="number" placeholder="0.0" className="swap-input" />
                      <button className="token-selector">
                        <div className="token-icon">B</div>
                        <span>BTC</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                    <div className="swap-input-value">≈ 28,500.00 €</div>
                  </div>
                  
                  <div className="swap-direction-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10L12 5L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 14L12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <div className="swap-input-container">
                    <div className="swap-input-header">
                      <span>Vers</span>
                      <span className="swap-balance">Solde: 3.2 ETH</span>
                    </div>
                    <div className="swap-input-group">
                      <input type="number" placeholder="0.0" className="swap-input" />
                      <button className="token-selector">
                        <div className="token-icon">E</div>
                        <span>ETH</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                    <div className="swap-input-value">≈ 28,500.00 €</div>
                  </div>
                  
                  <div className="swap-details">
                    <div className="swap-detail-item">
                      <span>Taux d'échange</span>
                      <span>1 BTC = 16.5 ETH</span>
                    </div>
                    <div className="swap-detail-item">
                      <span>Frais de réseau estimés</span>
                      <span>0.0005 BTC</span>
                    </div>
                    <div className="swap-detail-item">
                      <span>Slippage minimum</span>
                      <span>0.5%</span>
                    </div>
                  </div>
                  
                  <button className="swap-button">Échanger maintenant</button>
                </div>
              </TabsContent>
              
              <TabsContent value="limit">
                <div className="placeholder-content">
                  Fonctionnalité d'ordre limite à implémenter
                </div>
              </TabsContent>
              
              <TabsContent value="pool">
                <div className="placeholder-content">
                  Fonctionnalité de gestion de liquidité à implémenter
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="swap-info">
          <Card>
            <CardHeader>
              <CardTitle>Transactions Récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="transactions-list">
                <div className="transaction-item">
                  <div className="transaction-icon sent">↑</div>
                  <div className="transaction-details">
                    <div className="transaction-title">BTC → ETH</div>
                    <div className="transaction-date">Il y a 2 heures</div>
                  </div>
                  <div className="transaction-amount">
                    <div className="amount-sent">-0.05 BTC</div>
                    <div className="amount-received">+0.825 ETH</div>
                  </div>
                </div>
                
                <div className="transaction-item">
                  <div className="transaction-icon received">↓</div>
                  <div className="transaction-details">
                    <div className="transaction-title">SOL → BTC</div>
                    <div className="transaction-date">Hier</div>
                  </div>
                  <div className="transaction-amount">
                    <div className="amount-sent">-10 SOL</div>
                    <div className="amount-received">+0.004 BTC</div>
                  </div>
                </div>
                
                <div className="transaction-item">
                  <div className="transaction-icon sent">↑</div>
                  <div className="transaction-details">
                    <div className="transaction-title">ETH → ADA</div>
                    <div className="transaction-date">Il y a 3 jours</div>
                  </div>
                  <div className="transaction-amount">
                    <div className="amount-sent">-0.5 ETH</div>
                    <div className="amount-received">+500 ADA</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Swap;
