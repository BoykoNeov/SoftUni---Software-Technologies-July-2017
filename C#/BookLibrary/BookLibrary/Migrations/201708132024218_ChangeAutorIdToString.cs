namespace BookLibrary.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeAutorIdToString : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Books", new[] { "Author_Id" });
            DropColumn("dbo.Books", "AuthorId");
            RenameColumn(table: "dbo.Books", name: "Author_Id", newName: "AuthorId");
            AlterColumn("dbo.Books", "AuthorId", c => c.String(maxLength: 128));
            CreateIndex("dbo.Books", "AuthorId");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Books", new[] { "AuthorId" });
            AlterColumn("dbo.Books", "AuthorId", c => c.Int(nullable: false));
            RenameColumn(table: "dbo.Books", name: "AuthorId", newName: "Author_Id");
            AddColumn("dbo.Books", "AuthorId", c => c.Int(nullable: false));
            CreateIndex("dbo.Books", "Author_Id");
        }
    }
}
