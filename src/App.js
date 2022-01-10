import React, { useState } from 'react'
// import Modal from './components/Modal'
import {
	CloseButton,
	Button,
	Form,
	Row,
	Col,
	FloatingLabel,
	Stack,
} from 'react-bootstrap'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
			body {
				background: #808080;
			}
			`
const Modal = styled.div`
	max-width: 660px;
	margin: 0 auto;
	padding: 35px 30px;
	background: #fff;
	margin-top: 50px;
`
const Title = styled.div`
	font-size: 32px;
	font-weight: 500;
`

function App() {
	// Modal switch
	const [activeModal, setActiveModal] = useState(true)
	const handleActiveModal = () => setActiveModal(!activeModal)

	// Price
	const [price, setPrice] = useState(150)

	// Price features
	const [featureChecked, setFeatureChecked] = useState(0)

	const addFeatureValue = e => {
		if (e.target.checked) {
			setFeatureChecked(prev => prev + Number(e.target.value))
		}
		if (!e.target.checked) {
			setFeatureChecked(prev => prev - e.target.value)
		}
	}

	const getFeatureValue = val => {
		setPrice(val)
	}

	// Validation
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')

	const [nameDirty, setNameDirty] = useState(false)
	const [lastNameDirty, setLastNameDirty] = useState(false)
	const [emailDirty, setEmailDirty] = useState(false)

	const [nameError, setNameError] = useState('Please fill in first name')
	const [lastNameError, setLastNameError] = useState(
		'Please fill in second name'
	)
	const [emailError, setEmailError] = useState('Please fill in email')

	const emailHandler = e => {
		setEmail(e.target.value)
		const filter =
			/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
		if (!filter.test(String(e.target.value).toLowerCase())) {
			setEmailError('email is not valid')

			if (!e.target.value) {
				setEmailError('Please fill in email')
			}
		} else {
			setEmailError('')
		}
	}

	const nameHandler = e => {
		setName(e.target.value)

		const filter =
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
		if (!filter.test(String(e.target.value).toLowerCase())) {
			setNameError('name is not valid')
			if (!e.target.value) {
				setNameError('Please fill in first name')
			}
		} else {
			setNameError('')
		}
	}

	const lastNameHandler = e => {
		setLastName(e.target.value)

		const filter =
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
		if (!filter.test(String(e.target.value).toLowerCase())) {
			setLastNameError('Second name is not valid')
			if (!e.target.value) {
				setLastNameError('Please fill in second name')
			}
		} else {
			setLastNameError('')
		}
	}

	const blurHandler = e => {
		switch (e.target.name) {
			case 'name':
				setNameDirty(true)
				break
			case 'lastName':
				setLastNameDirty(true)
				break
			case 'email':
				setEmailDirty(true)
				break
		}
	}

	return (
		<div>
			{!activeModal ? (
				<button onClick={handleActiveModal}>Open modal window</button>
			) : (
				''
			)}
			{activeModal ? <Global /> : ''}
			{activeModal ? (
				<Modal>
					<Form>
						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formGridEmail'>
								<Title>Title form</Title>
							</Form.Group>

							<Form.Group
								style={{ display: 'flex', justifyContent: 'flex-end' }}
								as={Col}
								controlId='formGridPassword'
							>
								<CloseButton onClick={handleActiveModal} />
							</Form.Group>
						</Row>

						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Control
								onBlur={e => blurHandler(e)}
								name='name'
								onChange={e => nameHandler(e)}
								value={name}
								style={{ height: '56px' }}
								type='text'
								placeholder='First Name *'
							/>
							{nameDirty && nameError && (
								<p style={{ color: 'red' }}>{nameError}</p>
							)}
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Control
								onBlur={e => blurHandler(e)}
								onChange={e => lastNameHandler(e)}
								name='lastName'
								value={lastName}
								style={{ height: '56px' }}
								type='text'
								placeholder='Second Name *'
							/>
							{lastNameDirty && lastNameError && (
								<p style={{ color: 'red' }}>{lastNameError}</p>
							)}
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Control
								onBlur={e => blurHandler(e)}
								onChange={e => emailHandler(e)}
								name='email'
								value={email}
								style={{ height: '56px' }}
								type='email'
								placeholder='user@gmail.com *'
							/>
							{emailDirty && emailError && (
								<p style={{ color: 'red' }}>{emailError}</p>
							)}
						</Form.Group>

						<Row className='g-2' style={{ marginBottom: '16px' }}>
							<Col md>
								<FloatingLabel
									controlId='floatingInputGrid'
									label='Product type *'
								></FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel controlId='floatingSelectGrid'>
									<Form.Select
										style={{ height: '40px', paddingTop: '.625rem' }}
										aria-label='Floating label select example'
										onChange={e => getFeatureValue(Number(e.target.value))}
									>
										<option value='50'>Product $50</option>
										<option value='100'>Product $100</option>
										<option value='300'>Product $300</option>
									</Form.Select>
								</FloatingLabel>
							</Col>
						</Row>

						{/* ADDITIONAL WITH RADIO */}
						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formGridEmail'>
								<Form.Label>Additional feature for $100</Form.Label>
							</Form.Group>

							<Form.Group as={Col} controlId='formGridPassword'>
								<Form.Check
									className={'inputCheck'}
									style={{ display: 'flex', justifyContent: 'flex-end' }}
									type='switch'
									id='custom-switch'
									value='100'
									onChange={e => addFeatureValue(e)}
								/>
							</Form.Group>
						</Row>

						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formGridEmail'>
								<Form.Label>Additional feature for $200</Form.Label>
							</Form.Group>

							<Form.Group as={Col} controlId='formGridPassword'>
								<Form.Check
									style={{ display: 'flex', justifyContent: 'flex-end' }}
									type='switch'
									id='custom-switch'
									value='200'
									onChange={e => addFeatureValue(e)}
								/>
							</Form.Group>
						</Row>

						{/* TEXTAREA ===================================================  */}
						<Form.Control
							as='textarea'
							placeholder='Type your comment'
							style={{ height: '112px', marginBottom: '39px' }}
						/>
						{/* ============================================================= */}

						{/* TOTAL PRICE  */}

						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formGridEmail'>
								<Form.Label>Total price</Form.Label>
							</Form.Group>

							<Form.Group
								as={Col}
								controlId='formGridPassword'
								style={{ display: 'flex', justifyContent: 'flex-end' }}
							>
								<Form.Label>${150 + price + featureChecked}</Form.Label>
							</Form.Group>
						</Row>

						<Stack>
							<Button
								style={{
									minWidth: '162px',
									minHeight: '50px',
									fontWeight: '700',
									backgroundColor: '#448AE0',
									border: '1px solid #356FBA',
								}}
								className={'mx-auto'}
								variant='primary'
								type='submit'
							>
								Send form
							</Button>
						</Stack>
					</Form>
				</Modal>
			) : (
				''
			)}
		</div>
	)
}

export default App
