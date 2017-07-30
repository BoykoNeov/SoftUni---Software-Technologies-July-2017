function solve(str) {
    const regex = /\b[A-Z]+\b/g;
    let m;
    let result = [];

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match) => {
            result.push(match.toString());
        });
    }

    console.log(result.join(", "));
}

/*
 solve("We start by HTML, CSS, JavaScript, JSON and REST. Later we touch some" +
 " PHP, MySQL and SQL. Later we play with C#, EF, SQL Server and ASP.NET MVC. " +
 "Finally, we touch some Java, Hibernate and Spring.MVC.");*/
