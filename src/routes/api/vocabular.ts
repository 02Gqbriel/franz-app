import { PrismaClient} from "@prisma/client";
import type { Vocabular } from "@prisma/client";
import type { RequestEvent, RequestHandlerOutput, ResponseBody } from "@sveltejs/kit";

const prisma = new PrismaClient();

export async function get({url}: RequestEvent): Promise<RequestHandlerOutput<ResponseBody>>{
	const grundform = url.searchParams.get('grundform');

	if(grundform){
		const data = await prisma.vocabular.findUnique({where:{grundform: grundform}})

		return {
			status: data ? 200 : 400,
			body: data ? JSON.stringify(data): "Not found",
		}

	}else{
		const data = await prisma.vocabular.findMany();

		data.sort(()=> Math.random()-0.5)

		return {
			status: 200,
			body: JSON.stringify(data),
		};
	}
}

export async function post({request}: RequestEvent): Promise<RequestHandlerOutput<ResponseBody>>{
    const {grundform,  uebersetzung, present, imparfait, future_simple, conditionnel_present, passe_compose, plus_que_parfait}: Vocabular = await request.json();
    if (
			!grundform ||
			!uebersetzung ||
			!present ||
			!imparfait ||
			!future_simple ||
			!conditionnel_present ||
			!passe_compose ||
			!plus_que_parfait
		) {
			return {
				status: 400,
			};
		}

    if(await prisma.vocabular.findUnique({where:{grundform: grundform}}) != null){
		return {
			status: 400,
			body: "already exists"
		};
	}

    await prisma.vocabular.create({
			data: {
				grundform,
				uebersetzung,
				present,
				imparfait,
				future_simple,
				conditionnel_present,
				passe_compose,
				plus_que_parfait,
			},
		});



    return {
        status: 200,
        body: JSON.stringify(request)
    }
}