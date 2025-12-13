using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Data;

public class Race
{
    public int Id { get; set; }

    [Column(TypeName = "varchar")]
    [StringLength(150)]
    public required string Name { get; set; }

    [Column(TypeName = "varchar")]
    [StringLength(500)]
    public required string Description { get; set; }

    public byte Capacity { get; set; }

    [Column(TypeName = "smalldatetime")]
    public DateTime Date { get; set; }
}
