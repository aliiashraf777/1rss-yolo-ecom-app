import Helmet from "../Components/Helmet";
import HeroSlider from '../Components/HomeSlider';
 
import heroSliderData from "../assets/fake-data/hero-slider";

import Section, { SectionTitle, SectionBody } from "../Components/Section";
import policy from "../assets/fake-data/policy";
import PolicyCard from "../Components/PolicyCard";
import Grid from '../Components/Grid'
import { Link } from "react-router-dom";

import productData from "../assets/fake-data/products";
import ProductCard from "../Components/ProductCard";

import banner from '../assets/images/banner.png'


const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={3100}
            />

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, idx) => (
                                <Link to='/policy' key={idx}>
                                    <PolicyCard
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

            {/* best selling section */}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCool={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, idx) => (
                                <ProductCard
                                    key={idx}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

            {/* new Arrivals section */}
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCool={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, idx) => (
                                <ProductCard
                                    key={idx}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

            {/* banner section */}
            <Section>
                <SectionBody>
                    <Link to='/catalog'>
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>

            {/* popular products section */}
            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCool={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, idx) => (
                                <ProductCard
                                    key={idx}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

        </Helmet >
    )
}

export default Home
