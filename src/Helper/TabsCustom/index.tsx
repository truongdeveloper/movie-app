

import { Tab, Tabs } from "@mui/material";
import { ITabsCustom, ListTabs } from "./types"
import clsx from 'clsx';
import { WithStyles, withStyles } from '@mui/styles';
import styles from './styles';
import { isEmpty, uniqueId } from "lodash";

const TabsCustom = (props: ITabsCustom) => {
    const {
        className,
        style,
        listTabs,
        value,
        setValue,
        orientation,
        ...otherProps
    } = props;


    const handleChange = (event: React.SyntheticEvent , newValue: number) => {
        setValue(newValue);
    };

    return(
        <Tabs
            value={value}
            className={
                clsx(
                    className,
                    'tabs-custom',
                )
            }
            sx={{
                ...styles.TabCustom,
            }}
            centered
            onChange={handleChange}
            orientation={orientation}
            {...otherProps}
        >
            {!isEmpty(listTabs) && listTabs.map((item: ListTabs) => {
                return(
                    <Tab
                        className="tab-custom"
                        style={{
                            ...style,
                        }}
                        
                        sx={{
                            ...styles.TabsCustom,
                        }}
                        key={uniqueId()}
                        icon={item.icon}
                        value={item.value}
                        iconPosition={'start'}
                        label={item.title}
                    />
                )
            })}
        </Tabs>
    )
}

export default TabsCustom