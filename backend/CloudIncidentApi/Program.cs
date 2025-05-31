using CloudIncidentApi.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IncidentService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Cloud Incident API", Version = "v1" });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Cloud Incident API v1");
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

await app.RunAsync();
// This code sets up a basic ASP.NET Core web application with Swagger documentation for a Cloud Incident API.
// It includes a service for managing incidents and configures the application to run with HTTPS redirection and authorization.
// The application is built to run asynchronously, allowing for efficient handling of requests.
// The Swagger UI is enabled in development mode to provide an interactive API documentation interface. 
// The application is ready to handle HTTP requests related to cloud incidents, such as retrieving and creating incident records.
// The IncidentService is registered as a singleton, meaning it will maintain state across requests, which is suitable for simple applications or prototypes.
// The application is structured to allow for easy expansion in the future, such as adding more services or controllers as needed.
// The use of `await app.RunAsync()` ensures that the application runs asynchronously, which is a best practice in modern web applications to improve performance and responsiveness.
// The code is designed to be simple and straightforward, making it easy for developers to understand and extend the functionality as needed.
// The application is built using the latest C# features, ensuring compatibility with modern development practices and tools.
// The use of dependency injection for the IncidentService promotes better testability and maintainability of the code.