import React from 'react';
import './App.css';
import Modal from 'react-modal';
import zoom from './zoom.png';
import temp_screenshot from './screenshot.png';
import star from './star.png';
import star_filled from './star_filled.png';
import orientation from './orientation.svg';
import detection from './detection.svg';
import position from './placeholder.svg';
import {CSVLink, CSVDownload} from 'react-csv';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //"http://drive.google.com/uc?export=view&id=FILEID" -> replace FILEID with string of character between file/d/ and /view in the gdrive link
            setA:[
                { index: 0, seenVideosIndex: 0, id: "D1", video: "https://drive.google.com/file/d/1FMMJiPAX6_NTqlDJ8dcErIHo4SVOzD-M/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Padding increased by 2.5 cm", simulation_type: "safety", starred: false, thumbs_up: false},
                { index: 1, id: "D2", video: "https://drive.google.com/file/d/1B5AmJCvlv6PnikiPRMN1vUWGen55Pqyr/preview", img: "http://drive.google.com/uc?export=view&id=1ytCzRjlIXNJ_sVlg7X-txV5m5crXyrSQ", current_simulation_text: "Padding decreased by 2.5 cm", simulation_type: "safety", starred: false, thumbs_up: false},
                { index: 2, id: "D3", video: "https://drive.google.com/file/d/1fA2s9U-QzH8BBLcLKeeSljowinPCGvaC/preview", img: "http://drive.google.com/uc?export=view&id=1KT52NC0pGb0QxUBAcYc4POVVeTiXIFg4", current_simulation_text: "Padding decreased by 2.5 cm", simulation_type: "safety", starred: false, thumbs_up: false},
            ],
            set_empty:[

            ],
            seenVideos:[
                //{ index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
            ],
            current_set: "setA",
            position_number: -1,
            orientation_number: 3, 
            detection_number: 7,
            current_simulation: 0,
            //participantOpened: true,
            participant_number: '',
            mod: 0,
            round: 1,
            selectModalOpened: false,
            clearModalOpened: false,
            endModalOpened: false,
            current_seen_vid_index: 0,
            can_access_buttons: true,
            x: 0,
            y: 0,
            csvData: [],
        };
        this.handleSimulationClick = this.handleSimulationClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleStar = this.handleStar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.toggleModal = this.toggleModal.bind(this);
        this.handleNewSimulation = this.handleNewSimulation.bind(this);
        this.toggleSelectModal = this.toggleSelectModal.bind(this);
        this.toggleClearModal = this.toggleClearModal.bind(this);
        this.setThumbsDown = this.setThumbsDown.bind(this);
        this.setThumbsUp = this.setThumbsUp.bind(this);
    }

    _onMouseMove(e) {
        this.setState({x: e.screenX, y: e.screenY});
        let time = new Date().toLocaleString();
        console.log(time);
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        console.log("x: " + x + " y: " + y)
        let newObj = [time, x, y]
        this.setState({csvData: [...this.state.csvData, newObj]})
        //console.log("x: " + e.screenX + " y: " + e.screenY)
    }

    setThumbsDown(){
        let setA = [...this.state[this.state.current_set]];
        let curr = {...setA[this.state.current_simulation]};
        curr.thumbs_up = false;
        setA[this.state.current_simulation] = curr;
        this.setState({[this.state.current_set] : setA});

        let seenVideos = [...this.state.seenVideos];
        let curr_seen = {...seenVideos[this.state.current_seen_vid_index]};
        curr_seen.thumbs_up = false;
        seenVideos[this.state.current_seen_vid_index] = curr_seen;
        this.setState({seenVideos});
        
        this.setState({can_access_buttons: true})
    }
    setThumbsUp(){
        let setA = [...this.state[this.state.current_set]];
        let curr = {...setA[this.state.current_simulation]};
        curr.thumbs_up = true;
        setA[this.state.current_simulation] = curr;
        this.setState({[this.state.current_set] : setA});

        let seenVideos = [...this.state.seenVideos];
        let curr_seen = {...seenVideos[this.state.current_seen_vid_index]};
        curr_seen.thumbs_up = true;
        seenVideos[this.state.current_seen_vid_index] = curr_seen;
        this.setState({seenVideos});

        this.setState({can_access_buttons: true})
    }

    handleSimulationClick(item){
        this.setState({current_simulation: item.index})
        console.log("set simulation to " + item.index);
        this.setState({current_seen_vid_index : item.seenVideosIndex})
        this.setState({can_access_buttons : true})
    }

    handleSelect(){
        console.log("selected simulation " + this.state.current_simulation.id);
        //DO SOMETHING HERE
    }

    handleClear(){
        this.setState({initial: true})
        this.setState({selectModalOpened : false})
        this.setState({clearModalOpened: false})
        
        this.setState({endModalOpened : true})
    }

    toggleSelectModal(){
        this.setState({selectModalOpened : !this.state.selectModalOpened})
    }

    toggleClearModal(){
        this.setState({clearModalOpened : !this.state.clearModalOpened})
    }

    /*toggleModal() {
        this.setState(prevState => ({participantOpened: false}));
        this.setState({initial: true})

        let mod = this.state.participant_number % 6;
        console.log("mod ", mod)
        this.setState({mod });
        if(mod === 0 || mod === 4){
            console.log("A")
            //start with A
            let seenVideos = [
                //{ index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
            ];
            this.setState({initialPhoto: "http://drive.google.com/uc?export=view&id=1hc8otWURSljBv-o5yF4YssvsFDRWM8Sq"})
            this.setState({seenVideos})
            this.setState({current_set: "setA"})
        }
        else if(mod === 1 || mod === 5){
            console.log("B")
            //start with B
            let seenVideos = [                
                //{ index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
            ];
            this.setState({initialPhoto: "http://drive.google.com/uc?export=view&id=1u4Z6TDt7bOEm3fMS9iZh8sUSJ21sVnLH"})
            this.setState({seenVideos})
            this.setState({current_set: "setB"})
        }
        else if(mod === 2 || mod === 3){
            console.log("C")
            //start with C
            let seenVideos = [
                //{ index: 0, seenVideosIndex: 0, id: "C11", video: "https://drive.google.com/file/d/1zc_AZFulH8VzaGrZZIR_AlScv7THPI0k/preview", img: "http://drive.google.com/uc?export=view&id=1K5ZbDR7wsnGzxfc7q_uiDixoDRpCJc4r", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
            ];
            this.setState({initialPhoto: "http://drive.google.com/uc?export=view&id=1HbmA5LZxv52e13af8V3z-yWbREPKRvFd"})
            this.setState({seenVideos})
            this.setState({current_set: "setC"})
        }
    }*/

    componentDidMount(){
        this.setState({initial: true})
        this.setState({initialPhoto: "http://drive.google.com/uc?export=view&id=1hc8otWURSljBv-o5yF4YssvsFDRWM8Sq"})
    }

    componentDidUpdate(){
        var element = document.getElementById("current_sim")
        if(element != null){
            element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
        }
    }

    handleStar(id, seenVideosIndex){
        let setA = [...this.state[this.state.current_set]];
        let curr = {...setA[id]};
        curr.starred = !curr.starred;
        setA[id] = curr;
        this.setState({[this.state.current_set] : setA});

        let seenVideos = [...this.state.seenVideos];
        let curr_seen = {...seenVideos[seenVideosIndex]};
        curr_seen.starred = !curr_seen.starred;
        seenVideos[seenVideosIndex] = curr_seen;
        this.setState({seenVideos});
    }

    handleChange(event) {
        this.setState({participant_number: event.target.value})
      }

    handleNewSimulation(type_of_simulation){
        this.setState({initial: false})
        if(this.state.can_access_buttons){
            let index = 0;
            if(this.state.position_number < 2){
                    index = this.state.position_number + 1;
                    this.setState({ position_number: index })
            }
            else{
                return;
            }
            this.setState({current_simulation: index})
            console.log("current_simulation: " + index);
            
            let setA = [...this.state[this.state.current_set]];
            let curr = {...setA[index]};
            curr.seenVideosIndex = this.state.seenVideos.length;
            this.setState({
                seenVideos: this.state.seenVideos.concat(curr)
            })

            setA[index] = curr
            this.setState({ [this.state.current_set] : setA});

            this.state.seenVidIndex = curr.seenVideosIndex;
            this.state.current_seen_vid_index = curr.seenVideosIndex;
            this.setState({can_access_buttons: false})
        }
    }

    render() {
        const x = this.state.x;
        const y = this.state.y;
        let itemList = this.state.seenVideos.map(item => {
            return (
                <div onClick={() => this.handleSimulationClick(item)} className="card_item" key={item.id} id={item.index === this.state.current_simulation ? "current_sim" : "not_current_sim"}> 
                    <div className="relative" id={item.index === this.state.current_simulation ? "current" : "not_current"}>
                        <img className="item_starred" onClick={() => this.handleStar(item.index, item.seenVideosIndex)} src={item.starred ? star_filled : star}/>
                        {/*<iframe className="card_image" src={item.video} id={item.id == this.state.current_simulation ? "selected" : "not_selected"}></iframe> */}
                        {/*<img className="card_image" id={item.index == this.state.current_simulation ? "selected" : "not_selected"} src={item.img} alt="Screenshot" /> */}
                        <img className="card_image" id={item.thumbs_up ? "not_selected" : "selected"} src={item.img} alt="Screenshot" />
                    </div>
                      <div className="text_descr">{item.current_simulation_text}</div>
                      <hr className="solid" id={item.simulation_type}></hr>
                </div>
            )
        })
return (
    <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <Modal className="modal"
          isOpen={this.state.participantOpened}>
              <div> Enter Participant Number: </div>
          <input onChange={this.handleChange.bind(this)} value={this.state.participant_number} />
          <button onClick={() => this.toggleModal()}> Submit </button>
        </Modal>
        <Modal className="modal"
          isOpen={this.state.selectModalOpened}>
              You are about to select the current alternative as the most suitable one. Are you sure about that?
              <button onClick={() => this.handleClear()}> Yes </button>
              <button onClick={() => this.toggleSelectModal()}> Go Back </button>
        </Modal>
        <Modal className="modal"
          isOpen={this.state.clearModalOpened}>
              <div> Are you sure you want to quit? </div>
              <button onClick={() => this.handleClear()}> Yes </button>
              <button onClick={() => this.toggleClearModal()}> Go Back </button>
        </Modal>
        <Modal className="modal"
          isOpen={this.state.endModalOpened}>
            <p>You have completed the session. Thank you!</p>
            <CSVLink data={this.state.csvData} filename="mouse_tracking_arviz.csv">Download CSV</CSVLink>
        </Modal>
        <div className="topHalf">
            <div className="mainSection">
                <div className="topHeader"> 
                    <div>Current simulated outcome</div>
                    <div className="clear">
                        <img src={this.state[this.state.current_set][this.state.current_simulation].starred ? star_filled : star} alt="save" onClick={() => this.handleStar(this.state.current_simulation, this.state[this.state.current_set][this.state.current_simulation].seenVideosIndex)}/>
                    </div> 
                </div>
                <div className="mainVideo">
                    {this.state.initial ? 
                        <img src={this.state.initialPhoto} alt="Initial Photo" /> :
                        <iframe allow="autoplay" src={this.state[this.state.current_set][this.state.current_simulation].video}></iframe>}
                </div>
            </div>
            <div className="verticalSection">
                <div className="zoomVideo">
                    <img src={zoom} alt="Zoom" /> 
                </div>
                <div className="simulateSection">
                    <div className="header"> Generate alternate outcomes </div>
                    <div className="simulateChoices" id={(!this.state.can_access_buttons) ? "deactive" : "active"}>
                        <div className="choice">
                            <img className="first" id={(this.state.position_number === 2 || !this.state.can_access_buttons) ? "disable" : "none"} onClick={() => this.handleNewSimulation("position")} src={position} />
                            <div className="label" id={(this.state.position_number === 2 || !this.state.can_access_buttons) ? "disable" : "none"}>Safety margin </div>
                        </div>
                    </div>
                </div>
                <div className="thumbs_up_down">
                    <div className="choose_improvement" id={this.state.can_access_buttons ? "deactive" : "active"}>
                        <div className="question" id={this.state.can_access_buttons ? "disable" : "none"}>Is this outcome better?</div>
                        <div className="row">
                            <div className="quit" id={this.state.can_access_buttons ? "disable" : "none"} onClick={() => this.setThumbsDown()}>No </div>
                            <div className="select" id={this.state.can_access_buttons ? "disable" : "none"} onClick={() => this.setThumbsUp()}>Yes </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="bottomHalf">
              <div className="historyView">
                <div className="header"> Simulation history </div>
                <div className="scrollView">
                    <section className="card">
                        {itemList}
                    </section>
                </div>
              </div>
              <div className="currentSimulationView">
                  <div className="header"> Proceed to the next scenario </div>
                  <div className="selectSimulation">
                      {/*<div>{this.state[this.state.current_set][this.state.current_simulation].current_simulation_text}</div>*/}
                      <div className="finalQuestion"> Did you find a better alternative outcome that&#39;s currently playing</div>
                      <div className="quit" onClick={() => this.toggleClearModal()}>No, I quit! :( </div>
                      <div className="select" onClick={() => this.toggleSelectModal()}> Yes, let&#39;s go!</div>
                  </div>
              </div>
          </div>
        </div>);
    }
}

export default App;
