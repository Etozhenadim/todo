import Form from 'react-bootstrap/Form';

export const ThemeSwitcher = ()=> {
    return(
        <>
            <p>Theme Switcher</p>
            <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
            />
        </>
    )
}