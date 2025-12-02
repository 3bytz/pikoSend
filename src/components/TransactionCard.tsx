import React from 'react';

interface Transaction {
  name: string;
  amount: string;
  status: 'Success' | 'Pending' | 'Failed';
  date: string;
  icon: string;
  iconBg: string;
}

interface TransactionCardProps {
  className?: string;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ className = '' }) => {
  const transactions: Transaction[] = [
    {
      name: 'Netflix',
      amount: '-$6.25',
      status: 'Success',
      date: '19 Jan, 2025',
      icon: 'N',
      iconBg: '#E50914',
    },
    {
      name: 'Amazonprime.com',
      amount: '-$4.00',
      status: 'Success',
      date: '18 Jan, 2025',
      icon: 'a',
      iconBg: '#00A8E1',
    },
  ];

  return (
    <div className={`backdrop-blur-xl bg-black/40 border border-white/20 rounded-3xl p-5 shadow-2xl w-full max-w-sm animate-fade-up ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-base">Recent transactions</h3>
        <button className="text-piko-teal text-sm hover:underline">See all</button>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
              style={{ backgroundColor: transaction.iconBg }}
            >
              {transaction.icon}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium">{transaction.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-block px-2 py-0.5 bg-piko-green/20 text-piko-green text-xs rounded">
                  {transaction.status}
                </span>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-white text-sm font-semibold">{transaction.amount}</p>
              <p className="text-white/50 text-xs mt-0.5">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
