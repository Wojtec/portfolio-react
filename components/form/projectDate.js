import React, { Component }from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Input } from 'reactstrap';


class ProjectDate extends Component {

      state = {
        dateValue: new Date(),
        isHidden: false,
      };
  
  setFieldValueAndTouched (date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);

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
                        <FormGroup check inline>
                        <Label className="margin" check >Currently work</Label>
                        <Input type="checkbox" onChange={() => this.toggleDate() } />
                        </FormGroup>
                         }
                        { canBeDisabled && isHidden &&   
                        <FormGroup check inline>
                        <Label className="margin" check>Set End Date</Label>
                        <Input type="checkbox" onChange={() => this.toggleDate(dateValue) } /> 
                        </FormGroup> }
                    { touched[field.name] &&
                        errors[field.name] && <div className="error">{errors[field.name]}</div>}    
            </FormGroup>
        );
  }
}

export default ProjectDate;