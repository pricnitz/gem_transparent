import React from 'react'
import founderimage from '../assets/founder_image.png'
import '../css/style.css'

const Overview = () => {
    return (
        <section className='oveview'>
            <div className="banner">
                <div className="overview_body" Data-scroll-direction="left"  Data-scroll data-scroll-speed="9">
                    <div className='overview_body_img'>
                        <img src={founderimage} alt="founderimage" />
                    </div>
                    <h3>The Founder: Ivanoé Miller</h3>
                    <span className="hr_line"></span>

                    <p>Born in Geneva in 1990, Ivanoé Miller’s journey has always been intertwined with the luster of
                        gems. After graduating as a jeweler in Geneva in 2011, he ventured to the Gemological Institute of
                        America in Bangkok and Mumbai, where he earned the title of Graduate Gemologist (G.G.). His
                        travels to mines, markets, and studies around the world have enriched not only his collection but
                        also his understanding of the gem’s mystique and market.</p>

                    <p>Ivanoé’s passion extends beyond the gems themselves; he immerses himself in traditions and the
                        lives of miners while understanding the high standards and expectations of Swiss goldsmiths.
                        Renowned for selecting premium colorstones, he now extends his expertise to diamonds, offering
                        the same trusted quality and discernment.</p>

                </div>
            </div>
        </section>
    )
}

export default Overview