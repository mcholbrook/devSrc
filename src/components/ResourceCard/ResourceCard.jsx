/* 
PSEUDO CODE:
- Import react and link
- Set up resource card component
    - fsc as we are not setting state
    - pass props. Use destructuring -(user, resource, ..)
    - Return resource props for link, title, description, and tags
    - Create a button to save a resource
        - set onClick event for addToCollection function which should be passed in as props
        - pass specific resource id
    - Create a button for upvotes
        - set onClick event for upvote function which should be passed as props
        - pass specific resource id
*/