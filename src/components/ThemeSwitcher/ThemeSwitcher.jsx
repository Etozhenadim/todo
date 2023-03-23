import Form from 'react-bootstrap/Form';

export const ThemeSwitcher = ({theme, setTheme})=> {
    return(
        <>
            <p>Theme</p>
            <Form.Control
                type="color"
                id="exampleColorInput"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                title="Choose your color"
            />
        </>
    )
}