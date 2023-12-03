import { db } from "$lib/server/database/database";
import { error, redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const studentId = data.get("studentId");
        const requestText = data.get("notes");

        console.log(studentId, requestText);

        const checkStudent = await db.request.findFirst({
            where: {
                studentId
            }
        })

        if (checkStudent) {
            return { error: true }
        }

        const newRequest = await db.request.create({
            data: {
                studentId,
                requestText
            }
        })

        return { success: true }
    }
}