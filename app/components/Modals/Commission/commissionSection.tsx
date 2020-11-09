import  React ,{FC, useState } from 'react'
import {
    Grid,
    GridItem,
} from '@patternfly/react-core';


const commissionValueType = [
    { name: '-select-', value: '0' },
    { name: 'percentage', value: 'percentage' },
    { name: 'Amount', value: 'amount' },
]


const CommissionSection: FC = () => {

    const [input, setInput] = useState<any>([{ amountFrom: '', amountTo: '', selectCommissionValueType: '', CommisionSectionValue: '' }])



    const handleInput = (e) =>{
        setInput({[e.target.name]:e.target.value})
    }
    const handleCommisionValueType = (e) =>{
        setInput({selectCommissionValueType:e.target.value})
    }
    console.log(input)
    return (
        <React.Fragment>
            <h4 style={{ background: "lightgray", margin: 'revert' }}>COMMISSION  SECTIONS</h4>
            <Grid>
                <GridItem span={3}>
                    <div className="form-group">
                        <b><label>Amount From </label></b>
                        <input
                            className="form-control"
                            type="number"
                            onChange={handleInput}
                            name="amountFrom"
                            value={input.amountFrom}
                        />
                    </div>
                </GridItem>
                <GridItem span={3}>
                    <div className="form-group">
                        <b><label>Amount To </label></b>
                        <input
                            className="form-control"
                            type="number"
                            onChange={handleInput}
                            name="amountTo"
                            value={input.amountTo}
                        />
                    </div>
                </GridItem>
                <GridItem span={3}>
                    <div className="form-group">
                        <b><label>Commission value type  </label></b>
                        <select className="form-control" onChange={handleCommisionValueType}>
                            {
                                commissionValueType.map((item, i) => {
                                    return <option key={i} value={item.value}>{item.name}</option>
                                })
                            }
                        </select>
                    </div>
                </GridItem>
                <GridItem span={3}>
                    <div className="form-group">
                        <b><label>Commission Value  </label></b>
                        <input
                            className="form-control"
                            type="number"
                            onChange={handleInput}
                            name="CommisionSectionValue"
                            value={input.CommisionSectionValue}
                        />
                    </div>
                </GridItem>
            </Grid>
        </React.Fragment>
    )
}
export default CommissionSection;