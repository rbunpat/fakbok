import { db } from "$lib/server/database/database";

export const load = async ({ request }) => {
    const allData = await db.request.findMany({
        orderBy: {
            createdAt: "desc"
        },
        select: {
            requestText: true,
        }
    })

    return {allData}

}