import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/bistro-boss-restaurant-resources/assets/home/featured.jpg';
import './featured.css';


const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle subHeading="check it out" heading="Featured Item "></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia tempora tenetur ipsa reiciendis maxime, perferendis fugiat exercitationem perspiciatis quidem eos ex nemo quae beatae dolore cumque sed esse! Ipsa quos, delectus nobis rem soluta quidem quibusdam consectetur nisi laboriosam hic natus rerum inventore pariatur, molestiae exercitationem magni voluptates nemo.</p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;