import Form from 'react-bootstrap/Form';

export const ThemeSwitcher = ()=> {
    return(
        <>
            <Form.Label htmlFor="exampleColorInput">Theme Switcher</Form.Label>
            <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
            />
        </>
    )
}