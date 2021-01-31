import { API, graphqlOperation } from 'aws-amplify'

export default {
  async getTagList () {
    const listTagQuery = `query listBlogTagModelTypes {
      listBlogTagModelTypes {
        items {
          id
          name
          sort_key
        }
      }
    }`
    const tags = await API.graphql(graphqlOperation(listTagQuery));
    return tags.data.listBlogTagModelTypes.items
  },

  async createTag(tagName, sortKey) {
    const createTag = `
      mutation createBlogTagModelType($name: String, $sort_key: Int) {
        createBlogTagModelType(input: {name: $name, sort_key: $sort_key}){
          id
          name
          sort_key
        }
      }
    `
    
    const tagDetail = {
      name: tagName,
      sort_key: sortKey
    }
    console.log(tagDetail)
    const newTag = await API.graphql(graphqlOperation(createTag, tagDetail))
    console.log(newTag);
    return newTag
  },
}
