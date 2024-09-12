import Image from "./Image"
import Button from "./ui/Button"


interface IProps{

}
const ProductCard= ({}: IProps) => {
    return (

        <div className=" border  rounded-md p-2 flex flex-col">
         
        <Image imageUrl="https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg"
        alt={"product name"}  className="rounded-md mb-2"/>
        <h3>Product Name: 2024 XYZ sedan </h3>
        <p>
        The latest model of the 2024 XYZ sedan offers a perfect blend of style, performance, 
        and cutting-edge technology. With its sleek, aerodynamic design and bold front grille,
         it commands attention on the road. Powered by a turbocharged engine, 
        it delivers an impressive balance of power and fuel efficiency.
        </p>
        <div className="flex items-center my-3 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-green-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-orange-600 rounded-full cursor-pointer"/>
        </div>
        <div className="flex  items-center justify-between">
            <span>$500,000</span>
            <Image imageUrl="https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg"
                 alt={"product name"}  className="w-10 h-10 rounded-full object-bottom"/>
        </div>
        <div className="flex items-center justify-between space-x-2 my-5">
            <Button className="bg-indigo-700"  >Edit</Button>
            <Button className="bg-red-700 ">Delete</Button>
            <Button className="bg-red-700 ">Edit x</Button>
        </div>
        </div>
    )
}

export default ProductCard