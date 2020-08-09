import React from 'react';


class SearchBar extends React.Component {

    state = { term: '' };

    // onInputClick() {
    //     console.log("input was clicked")
    // }

    //semantic ui for the styling


    //onformsubmit prevents the page from refreshing every search
    onFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (<div className="ui segment">

            <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                <div className="field">
                    <label> Image Search</label>
                    <input type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}


                    //console.log(state)
                    // onClick={this.onInputClick}
                    />
                </div>
            </form>
        </div>
        );
    }
}


export default SearchBar;