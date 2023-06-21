import React from "react"
import { prisma } from "../../server/db/client"

export default function Home( {items} ) {
    type MyItem = {
        id: string,
        name: string,
        desc_item: string | null,
        link_tel: string | null,
        info1: string | null,
        info2: string | null,
        slug: string,
        img: string
    }
    items.map(item => {console.log(item)});
    
    return (
        <>
            
            
                {items.map((item: MyItem) => (
                    <div>
                      <h1>{item.name}</h1>
                      <p>{item.desc_item}</p>
                      <a href={"https://t.me/" + item.link_tel}>Ссылка на телеграм</a>
                    </div>
                ))}
            
        </>
    )
}

export async function getServerSideProps() {

    const items = await prisma.item.findMany()
    return {
        props: {
            items: JSON.parse(JSON.stringify(items)),
        },
    }
}