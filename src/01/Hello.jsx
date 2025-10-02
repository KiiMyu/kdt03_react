function Hello() {
    let name = "김유섭"
    return (
        <div className="text-4xl font-bold text-blue-500" /*style={{color:"blue"}*/>
            Hello React { `${name} 님 안녕하세요!` }
        </div>
    )
}

export default Hello;