import { Button, FormGroup, Label, FormText } from 'reactstrap';


const PortfolioInput = ({
    label,
    field,
    type,
    form: { touched, errors },
    ...props
}) => (
    <FormGroup>
        <Label>{label}</Label>
        <input type={type} {...field} {...props} />
        {touched[field.name] &&
          errors[field.name] &&
          <div className="error">{errors[field.name]}</div>}
    </FormGroup>
)

export default PortfolioInput;