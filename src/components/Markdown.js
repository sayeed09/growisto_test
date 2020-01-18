import snarkdown from 'snarkdown';
import parse from 'html-react-parser';

function Markdown(props) {
    let html = snarkdown(props.text);
    return parse(html)
}

export default Markdown;
