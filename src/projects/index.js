import React, {Component} from 'react'
import './projects.css'
import StarsContainer from './StarsContainer'
import CirclesContainer from './CirclesContainer'

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            pageDisplayed: 0
        }
    }

    toggleRight = () => {
        if (this.state.pageDisplayed < 1) {
            this.setState(prevState => ({
                pageDisplayed: prevState.pageDisplayed += 1
            }))
        } else {
            this.setState({
                pageDisplayed: 0
            })
        }

    }

    toggleLeft = () => {
        if (this.state.pageDisplayed > 0) {
            this.setState(prevState => ({
                pageDisplayed: prevState.pageDisplayed -= 1
            }))
        } else {
            this.setState({
                pageDisplayed: 1
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                {
                    this.state.pageDisplayed === 0 ?
                        <CirclesContainer toggleRight = {this.toggleRight} toggleLeft = {this.toggleLeft} />
                    :
                        this.state.pageDisplayed === 1 ?
                            <StarsContainer toggleRight = {this.toggleRight} toggleLeft = {this.toggleLeft} />
                        :
                            <div>hello</div>
                }

                    {/* <StarsContainer />
                    <CirclesContainer /> */}
            </React.Fragment>
        )
    }
}

export default Projects