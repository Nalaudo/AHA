import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    field: {
        margin: "5px"
    },
    button: {
        margin: "5px 0px 10px 0px"
    },
};

const Form = ({ generateOrder, name, setName, lastName, setLastName, email, setEmail, emailValid, setEmailValid, phone, setPhone, notValid }) => {
    return (
        <React.Fragment>
            <form
                onSubmit={generateOrder}
            >
                <div style={styles.div}>
                    <TextField
                        style={styles.field}
                        id="name"
                        variant="outlined"
                        label="Nombre"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" />
                    <TextField
                        style={styles.field}
                        id="lastName"
                        variant="outlined"
                        label="Apellido"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text" />
                    <TextField
                        style={styles.field}
                        id="email"
                        variant="outlined"
                        label="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
                    <TextField
                        style={styles.field}
                        id="email"
                        variant="outlined"
                        label="Repetir email"
                        required
                        value={emailValid}
                        onChange={(e) => setEmailValid(e.target.value)}
                        type="email" />
                    <TextField
                        style={styles.field}
                        id="phone"
                        variant="outlined"
                        label="Número de teléfono"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number" />
                </div>
                <div style={styles.button}>
                    <Link to="/cart">
                        <Button> ← Atrás</Button>
                    </Link>
                    <Button
                        type="submit"
                        disabled={notValid}>Confirmar compra</Button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Form
