import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            rcvr: '',
            msg: ''
        }
    }

    hide() {
        console.log('here');
        document.getElementById("hidethis").style = "display:none";
        document.getElementById("submitlater").style = "display:none";
        document.getElementById("submitnow").style = "display:";
        document.getElementById("later").checked=false;
    }

    visible() {
        console.log('here');
        document.getElementById("hidethis").style = "display:";
        document.getElementById("submitnow").style = "display:none";
        document.getElementById("submitlater").style = "display:";
        document.getElementById("now").checked=false;
    }
    onDateChange(date) {
        console.log(date);
        this.setState({date});
    }
    onTimeChange(time) {
        console.log(time);
        this.setState({time});
    }
    onNameChange(rcvr) {
        console.log(rcvr);
        this.setState({rcvr});
    }
    onMsgChange(msg) {
        console.log(msg);
        this.setState({msg});
    }
    onSubmit(){
        fetch('http://127.0.0.1:8000/pflege/',{
            method: "post",
            headers:{
                "Content-type":"application/x-www-form-urlencoded;"
            },
            body:"date="+this.state.date+"&time="+this.state.time+"&reciever="+this.state.rcvr+"&content="+this.state.msg
        })
            .then(()=>{alert("DETAILS RECORDED")})
            .catch(function(error){
                console.log("request failed ",error);
            });


    }
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="card col-12">
                        <div className="card-header">
                            <form>
                            <input type="radio" id="now" value="now" onClick={this.hide.bind(this)}/> Now
                            <input type="radio" id="later" value="later" defaultChecked={true} onClick={this.visible.bind(this)}/> Later
                            </form>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row" id="hidethis">
                        <div className="card-block">
                            <span className="col-4">
                                Date:<input type="date" className="space" onChange={(event) =>
                                this.onDateChange(event.target.value)}/>
                            </span>
                            <span className="col-4" id="time">
                                Time:<input type="time" className="space" onChange={(event) =>
                                this.onTimeChange(event.target.value)}/>
                            </span>
                        </div>

                    </div>
                    <div className="card-block">
                        <div className="row">
                            To:<input type="text" id="to" className="space" onChange={(event) =>
                            this.onNameChange(event.target.value)}/>
                        </div>
                        <div className="row">
                            Message:<textarea id="msg" className="space" rows="6" cols="80" name="comment"
                                              placeholder='Enter text here...'
                                              form="usrform" onChange={(event) =>
                            this.onMsgChange(event.target.value)}/>
                        </div>
                        <a href="#" className="btn btn-primary" id="submitlater" onClick={this.onSubmit.bind(this)}>Submit</a>
                        <a href="#" className="btn btn-primary" id="submitnow" style={{display:'none'}}>Send Now</a>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));