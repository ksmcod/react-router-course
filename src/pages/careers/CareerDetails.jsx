import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams()
    const careerData = useLoaderData()
  return (
    <div className='career-details'>
        <h2>Career details for {careerData.title}</h2>
        <p>Starting salary: {careerData.salary}</p>
        <p>Location: {careerData.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos pariatur est quae, iusto quidem nisi minima quibusdam voluptates beatae id? Numquam, dolor! Cum eaque culpa quae nobis obcaecati incidunt?</p>
        </div>
    </div>
  )
}

export async function careerDetailsLoader({ params }) {
    const { id } = params
    const data = await fetch(`http://localhost:4001/careers/${id}`)

    if(!data.ok) {
        throw Error("Could not find job!")
    }
    return data.json()
}
