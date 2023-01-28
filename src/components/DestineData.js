import { Component } from "react";
import "./Destination.css";
class DestineData extends Component {
    render() {
        return (
            <>
                <div className="Firts">
                    <div className="Desc_text">
                        <h2>{this.props.Heading}</h2>
                        <p>
                            {this.props.Text}
                        </p>
                        <small>Fonte: Wikipedia</small>
                    </div>
                    <div className="Img">
                        <img src="https://user-images.githubusercontent.com/78994881/215268830-ba825bbd-1d71-433a-96b4-5e865a7174b2.jpg" alt='Porto_da_folha' />
                        <img src="https://user-images.githubusercontent.com/78994881/215268833-1065bcb9-463c-414f-bcd8-de54121a736e.jpg" alt='Porto_da Folha'></img> </div>
                </div>

                <div className="Firts">
                    <div className="Desc_text">
                        <h2>{this.props.Heading2}</h2>
                        <p>
                            {this.props.Text2}
                        </p>
                        <small>Fonte: Wikipedia</small>
                    </div>
                    <div className="Img">
                        <img src="https://user-images.githubusercontent.com/78994881/215278806-50ad6d27-941c-457b-94bd-478987d0b8da.jpg" alt='Porto_da_folha' />
                        <img src="https://user-images.githubusercontent.com/78994881/215278808-26cefdbf-b45d-4d28-8f09-8aeb847e24d5.jpg" alt='Porto_da Folha'></img> </div>
                </div>
                <div className="Firts">
                    <div className="Desc_text">
                        <h2>{this.props.Heading3}</h2>
                        <p>
                            {this.props.Text3}
                        </p>
                        <small>Fonte: Wikipedia</small>
                    </div>
                    <div className="Img">
                        <img src="https://user-images.githubusercontent.com/78994881/215279136-0ff1a3a9-9414-4161-ae3e-5156cf9ec90c.png" alt='Aracaju' />
                        <img src="https://user-images.githubusercontent.com/78994881/215279134-a1e4476e-c5cc-4642-b5dc-bd07027e850b.jpg" alt='Aracaju'></img> </div>
                    <div>
                    </div>
                </div>
            </>

        )
    }
}


export default DestineData;