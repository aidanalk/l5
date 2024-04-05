import { Tab, Tabs } from "@mui/material"

function TabsComponent({categoriesSelect, value, setValue, valueKey = 'value', labeKey = 'lebel'}) {

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return(
        <div>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {categoriesSelect.map((tab) => 
                    <Tab
                        key={tab[valueKey]}
                        value={tab[valueKey]}
                        label={tab[labeKey]}
                    ></Tab>
                )}
            </Tabs>
        </div>
    )
}

export default TabsComponent