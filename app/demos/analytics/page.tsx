"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, DollarSign, ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"

// Simulated real-time data
const generateRandomData = () => ({
  revenue: Math.floor(Math.random() * 50000) + 100000,
  users: Math.floor(Math.random() * 1000) + 5000,
  conversion: (Math.random() * 5 + 2).toFixed(2),
  growth: (Math.random() * 20 + 5).toFixed(1),
})

export default function AnalyticsDemoPage() {
  const [data, setData] = useState(generateRandomData())
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setData(generateRandomData())
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/demos">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Demos
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground">Smart Analytics Dashboard</h1>
                <p className="text-muted-foreground">Live Demo - Real-time Business Intelligence</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="bg-green-500">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                Live Data
              </Badge>
              <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Demo Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">${data.revenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+{data.growth}% from last month</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-foreground">{data.users.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+12.5% from last week</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold text-foreground">{data.conversion}%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+0.8% from yesterday</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">AI Predictions</p>
                  <p className="text-2xl font-bold text-foreground">94.2%</p>
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">AI</span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-muted-foreground">Accuracy Score</span>
              </div>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="p-6 mb-8">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">AI-Generated Insights</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Revenue Prediction:</strong> Based on current trends, revenue is
                  expected to increase by 15-20% next quarter.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">User Behavior:</strong> Peak activity detected between 2-4 PM.
                  Consider scheduling campaigns during this window.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Optimization Opportunity:</strong> Conversion rate could improve
                  by 12% with targeted A/B testing on the checkout flow.
                </p>
              </div>
            </div>
          </Card>

          {/* Demo Info */}
          <Card className="p-6 bg-muted/50">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">About This Demo</h3>
            <p className="text-muted-foreground mb-4">
              This interactive demonstration showcases our Smart Analytics Dashboard with real-time data processing,
              predictive analytics, and AI-generated business insights. The dashboard automatically updates every 5
              seconds to simulate live data streams.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Real-time Processing</Badge>
              <Badge variant="outline">Predictive Analytics</Badge>
              <Badge variant="outline">AI Insights</Badge>
              <Badge variant="outline">Custom Visualizations</Badge>
            </div>
            <div className="flex space-x-4">
              <Button asChild>
                <Link href="/contact">Request Full Demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
