import { InfoCards } from "@/components/dashboard/infoCard"
import { ProjectionsCard } from "@/components/dashboard/projections"
import { RevenueChartCard } from "@/components/dashboard/revenueChart"
import { RevenueByLocationCard } from "@/components/dashboard/revenueByLocation"
import { TopSellingTable } from "@/components/dashboard/topSelling"
import { TotalSalesCard } from "@/components/dashboard/totalSales"

export default function MainContent() {
    return (
        <div className="space-y-6 p-6">
            <h2 className="text-sm font-medium text-muted-foreground">eCommerce</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <InfoCards
                    items={[
                        { title: "Customers", value: "3,781", delta: "+11.01%", tint: 'blue' },
                        { title: "Orders", value: "1,219", delta: "-0.03%", tint: 'slate' },
                        { title: "Revenue", value: "$695", delta: "+15.03%", tint: 'slate' },
                        { title: "Growth", value: "30.1%", delta: "+6.08%", tint: 'blue' },
                    ]}
                />
                <ProjectionsCard />
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                <div className="lg:col-span-7">
                    <RevenueChartCard /> 
                </div>
                <div className="lg:col-span-3">
                    <div className="h-[280px]">  
                        <RevenueByLocationCard
                            rows={[
                                { label: "New York", value: "72k" },
                                { label: "San Francisco", value: "39k" },
                                { label: "Sydney", value: "25k" },
                                { label: "Singapore", value: "61k" },
                            ]}
                        />
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                <div className="lg:col-span-7">
                    <TopSellingTable
                        rows={[
                            { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
                            { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
                            { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
                            { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
                            { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
                        ]}
                    />
                </div>
                <div className="lg:col-span-3">
                    <TotalSalesCard />
                </div>
            </div>
        </div>
    )
}
