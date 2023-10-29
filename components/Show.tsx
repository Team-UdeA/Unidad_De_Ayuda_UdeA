import React from "react";

interface Element {
    _id: string;
    nombre: string;
    materia: string
    tipo: string;
    periodo: string;
    ruta: string;

}

const getData =async () => {
    try {
        const response = await fetch(`${process.env.URI}`, {cache:"no-store"})
        return response.json()
    } catch (error) {
        console.log("Error: ", error)
    }
};

const Show = async () => {
    const {data} = await getData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((element: Element) => (
                <div className="p-3 shadow-lg shadow-indigo-500/50 my-4 flex justify-between gap-4 items-start key={element._id}">
                    <div>
                        <p>
                            {element.ruta}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Show;