import { Link, useLoaderData } from "react-router-dom"

export default function Career() {
    const careers = useLoaderData()
    const careerElements = careers.map(career => (
        <Link to={`${career.id}`} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
        </Link>
    ))
  return (
    <div className='careers'>{careerElements}</div>
  )
}

// Loader function
export async function careersLoader () {
    const data = await fetch('http://localhost:4001/careers')

    if(!data.ok) {
        throw Error("Could not fetch careers!")
    }
    return data.json()
}
