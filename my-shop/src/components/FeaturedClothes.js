import React, { Component } from 'react'
import { ClothContext } from "../context";
import Loading from "./Loading";
import Cloth from "./Cloth";
import Title from "./Title";

export default class FeatureClothes extends Component {
    static contextType = ClothContext;
    render() {
        let { loading, featuredClothes: clothes } = this.context;
        clothes = clothes.map(cloth => {
            return <Cloth key ={cloth.id} cloth={cloth}/> 
        });

        return (
            <section className="featured-clothes">
                <Title title="featured clothes"/>
                <div className="featured-clothes-center">
                    {loading?<Loading/>:clothes}
                </div>
            </section>
        );
    }
}
