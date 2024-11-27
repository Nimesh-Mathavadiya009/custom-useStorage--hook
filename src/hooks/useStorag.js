export const useStorage = (key,initialValue,storageType) => {
    const storage = storageType === "local" ? localStorage : sessionStorage

    const setValue = (value) => {
        try {
            storage.setItem(key,JSON.stringify(value))
            return "added successfully!!"
        } catch (error) {
            console.log(error)
            return "something went wrong!"
        }
    }

    const getValue = () => {
        try {
            const value = JSON.parse(storage.getItem(key))
            if(!value){
                return initialValue
            }
            return value
        } catch (error) {
            console.log(error)
            return initialValue
        }
    }

    const removeValue = () => {
        try {
            storage.removeItem(key)
            return "removed successfully"
        } catch (error) {
            console.log(error)
            return "something went wrong!"
        }
    }

    return {setValue, removeValue, getValue}
}