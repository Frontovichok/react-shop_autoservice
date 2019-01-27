import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const ModalScrollingExample = () => (
    <Modal trigger={<Button>Long Modal</Button>} closeIcon>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
                <Header>Modal Header</Header>
                <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                Proceed <Icon name='right chevron' />
            </Button>
        </Modal.Actions>
    </Modal>
)

export default ModalScrollingExample