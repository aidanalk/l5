import React, { useState } from "react";
import { Container } from "react-bootstrap";
import History from "../../components/History";
import Souz from "../../components/Souz";
import TabsComponent from "../../components/Tabs";

const GetCategories = ({action}) => {
    switch (action) {
        case 'souz': {
            return <Souz/>
        }
        case 'history': {
            return <History/>
        }
        default: return <></>
    }
}

function Main() {

    const categoriesSelect = [
        {value: 'souz', label: ' о нас'},
        {value: 'history', label: 'история организации'},
        {value: 'organ', label: 'органы управления'},
        {value: 'projects', label: 'проекты'},
        {value: 'ourTeam', label: 'наша команда'}
    ]

    const [value, setValue] = useState(categoriesSelect?.[0].value)

    const swiperImage = [
        {url: ''}
    ]

    

    return(
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories action={value}/>
        </Container>
    )
}

export default Main