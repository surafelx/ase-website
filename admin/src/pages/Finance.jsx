import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { DollarSign, TrendingUp, TrendingDown, PieChart, Calendar, Receipt, CreditCard, Wallet } from 'lucide-react';

const Finance = () => {
  // Mock financial data
  const financialOverview = {
    totalRevenue: 8500000,
    totalExpenses: 6200000,
    netProfit: 2300000,
    pendingPayments: 450000,
    monthlyGrowth: 12.5
  };

  const recentTransactions = [
    {
      id: '1',
      type: 'Income',
      description: 'Project Payment - Amhara Solar System',
      amount: 1250000,
      date: '2024-09-15',
      category: 'Project Revenue'
    },
    {
      id: '2',
      type: 'Expense',
      description: 'Equipment Purchase - Solar Panels',
      amount: 850000,
      date: '2024-09-14',
      category: 'Equipment'
    },
    {
      id: '3',
      type: 'Income',
      description: 'Government Grant - Tigray Initiative',
      amount: 500000,
      date: '2024-09-12',
      category: 'Grants'
    },
    {
      id: '4',
      type: 'Expense',
      description: 'Staff Salaries - August',
      amount: 320000,
      date: '2024-09-10',
      category: 'Operations'
    },
    {
      id: '5',
      type: 'Income',
      description: 'Service Contract - Oromia Farmers',
      amount: 750000,
      date: '2024-09-08',
      category: 'Services'
    }
  ];

  const budgetCategories = [
    { name: 'Equipment & Materials', budgeted: 3000000, spent: 2450000, color: 'bg-blue-500' },
    { name: 'Operations & Staff', budgeted: 2000000, spent: 1680000, color: 'bg-green-500' },
    { name: 'Marketing & Outreach', budgeted: 500000, spent: 320000, color: 'bg-yellow-500' },
    { name: 'Research & Development', budgeted: 800000, spent: 450000, color: 'bg-purple-500' },
    { name: 'Administrative', budgeted: 400000, spent: 380000, color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Financial Management</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Receipt className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <CreditCard className="w-4 h-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              ETB {(financialOverview.totalRevenue / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">
              +{financialOverview.monthlyGrowth}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              ETB {(financialOverview.totalExpenses / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">
              Operating costs
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              ETB {(financialOverview.netProfit / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">
              Profit margin: {((financialOverview.netProfit / financialOverview.totalRevenue) * 100).toFixed(1)}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <Wallet className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              ETB {(financialOverview.pendingPayments / 1000).toFixed(0)}K
            </div>
            <p className="text-xs text-muted-foreground">
              Awaiting collection
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {budgetCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{category.name}</span>
                  <span>ETB {(category.spent / 1000).toFixed(0)}K / {(category.budgeted / 1000).toFixed(0)}K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${category.color}`}
                    style={{ width: `${(category.spent / category.budgeted) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {((category.spent / category.budgeted) * 100).toFixed(1)}% utilized
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Revenue Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Revenue Chart</p>
                <p className="text-sm text-gray-400">Interactive chart would be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'Income' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'Income' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    transaction.type === 'Income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.type}
                  </span>
                  <span className={`font-semibold ${
                    transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'Income' ? '+' : '-'}ETB {(transaction.amount / 1000).toFixed(0)}K
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Finance;