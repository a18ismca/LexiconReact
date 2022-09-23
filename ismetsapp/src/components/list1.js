export const List = ({people}) => {

    const listOfItems = (people.length == 0)
        ? <p>No results found</p>
        : <ul></ul>;

        return (
            <div>
                <h2>Contact list</h2>
            </div>
        )
    

}