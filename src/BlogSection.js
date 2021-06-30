import React, { Component } from 'react'
import ceker from './assets/images/ceker.png'

export class BlogSection extends Component {
    render() {
        return (
            <section className="Blog">
                <div className="wrapper">
                    <div className="content-right">
                        <div style={{ paddingRight: "70px" }}>
                            <div className="tag-blog">blog</div>
                            <div className="title-blog">Cara menyimpan daging agar awet dan segar tanpa Freezer</div>
                            <p>
                                Sudah banyak orang yang tahu jika menyimpan daging
                                dalam freezer menjadi cara mudah menyimpan stok daging
                                supaya awet dan tahan lama. Tapi bagaimana ya jika tidak
                                memiliki kulkas atau freezer? Tenang! Ada kok caranya,
                                <br />
                                <span style={{ color: "#FFBB00", fontWeight: "bold" }}> yuk disimak!</span>
                            </p>
                        </div>
                        <button className="btn btn-primary" style={{ backgroundColor: "#FFBB00", boxShadow: "0px 20px 30px -15px #FFBB00" }}>
                            Baca selengkapnya
                        </button>
                    </div>
                    <div className="content-left">
                        <div className="img-ceker">
                            <img src={ceker} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogSection
