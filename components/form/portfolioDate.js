import React, { Component }from "react";
import DatePicker from "react-datepicker";
import { Button, FormGroup, Label, Input } from 'reactstrap';


class PortfolioDate extends Component {

      state = {
        dateValue: new Date(),
        isHidden: false,
      };
  
  setFieldValueAndTouched (date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);

  }    
  handleChange = date => {

    this.setState({
        dateValue: date
    });

    this.setFieldValueAndTouched(date, true);
  };

  toggleDate(date) {

    this.setState ({
        isHidden: !this.state.isHidden
    });

    this.setFieldValueAndTouched(date, true);
  }

  render() {
      const { canBeDisabled, label,field, form: { touched, errors} } = this.props;
      const { isHidden, dateValue } = this.state;
        return (
            <FormGroup>
                <Label>{label}</Label>
                    <div className="input-group">
                    { !isHidden &&
                        <DatePicker
                            selected={dateValue}
                            onChange={this.handleChange}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            maxDate={new Date()}
                            dropdownMode="select"
                        /> 
                    }
                    </div>
                    { canBeDisabled && !isHidden &&  
                        <>
                        <Input type="checkbox" onChange={() => this.toggleDate() } />
                        <Label check>Currently work</Label>
                        </>
                         }
                        { canBeDisabled && isHidden &&   
                        <>
                        <div>
                        Currently Work there.
                        </div>
                        <Label check>Set End Date</Label>
                        <Input type="checkbox" onChange={() => this.toggleDate(dateValue) } /> 
                        </> }
                    { touched[field.name] &&
                        errors[field.name] && <div className="error">{errors[field.name]}</div>}    
            </FormGroup>
        );
  }
}

export default PortfolioDate;