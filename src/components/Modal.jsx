import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col, FloatingLabel, Stack } from 'react-bootstrap'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const Modal = () => {
	// const Global = createGlobalStyle`
	// 	body {
	// 		background: none;
	// 	}
	// `
	const Modal = styled.div`
		max-width: 660px;
		margin: 0 auto;
		padding: 35px 30px;
		background: #fff;
		margin-top: 50px;

		.inputCheck .form-check-input:checked {
			/* background: #cebcbd; */
		}
	`
	const Title = styled.div`
		font-size: 32px;
		font-weight: 500;
	`

	// const [activeClose, setActiveClose] = useState(false)
	// const handleCloseModal = () => setActiveClose(!activeClose)

	// VALIDATION ==========================================

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const [nameDirty, setNameDirty] = useState('')
	const [emailDirty, setEmailDirty] = useState('')

	return (
		<Modal>
			<Form>
				<Title>Title form</Title>
				<p>X</p>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Control
						style={{ height: '56px' }}
						type='text'
						placeholder='First Name *'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control
						style={{ height: '56px' }}
						type='text'
						placeholder='Last Name *'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control
						style={{ height: '56px' }}
						type='email'
						placeholder='user@gmail.com *'
					/>
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
							>
								{/* <option>Select product type</option> */}
								<option value='1'>Product $50</option>
								<option value='2'>Product $100</option>
								<option value='3'>Product $300</option>
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
						<Form.Label>$0</Form.Label>
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
	)
}

export default Modal
