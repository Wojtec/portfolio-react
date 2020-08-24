import React, { Component }from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Input } from 'reactstrap';


class ProjectDate extends Component {
  constructor(props){
    super(props);
    const dateValue = props.initialDate ? new Date(props.initialDate) : new Date();
    const isHidden = props.initialDate ? false : true;

    this.state = {
      dateValue: dateValue,
      isHidden,
    };
  }
   
  setFieldValueAndTouched (date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldTouched(name, touched, true);
    setFieldValue(name, date, true);

  }    

  handleChange = (date) => {
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
                            name="date"
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