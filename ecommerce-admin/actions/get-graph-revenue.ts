import prismadb from '@/lib/prismadb'

interface GraphData {
  name: string
  total: number
}

export const getGraphRevenue = async (
  storeId: string,
): Promise<GraphData[]> => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  })

  const monthlyRevenue: { [key: number]: number } = {}

  /*Calculate the revenue for each month*/
  for (const order of paidOrders) {
    const month = order.createdAt.getMonth() /*Get the month*/
    let revenueForOrder = 0

    for (const item of order.orderItems) {
      revenueForOrder += item.product.price.toNumber()
    }

    /*Adding the revenue to the month*/
    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder
  }

  /*Creating the graph data*/
  const graphData: GraphData[] = [
    { name: 'Jan', total: 0 },
    { name: 'Feb', total: 0 },
    { name: 'Mar', total: 0 },
    { name: 'Apr', total: 0 },
    { name: 'May', total: 0 },
    { name: 'Jun', total: 0 },
    { name: 'Jul', total: 0 },
    { name: 'Aug', total: 0 },
    { name: 'Sep', total: 0 },
    { name: 'Oct', total: 0 },
    { name: 'Nov', total: 0 },
    { name: 'Dec', total: 0 },
  ]

  /*Fill in the total revenue for each month*/
  for (const month in monthlyRevenue) {
    graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)]
  }

  return graphData
}
