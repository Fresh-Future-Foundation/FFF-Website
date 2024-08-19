import "./intern-opp.css"
import "../styles/fonts.css"

export default function InternshipOpporunity(props) {
    return (
        <div className="intern-div">
            <div className="position-header">
                <h1 className="position-title redhat-semibold">{props.title}</h1>
                <h4 className="position-spots redhat-medium">{props.taken}/{props.total_spots} Spot{props.extra_letter}</h4>
            </div>
            <p className="position-disc manrope-light">{props.description}</p>
        </div>
    );
}