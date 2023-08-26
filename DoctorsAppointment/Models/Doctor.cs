using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Doctor
{
    public int Id { get; set; }

    public string Fname { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Gender { get; set; } = null!;

    public int Experience { get; set; }

    public int UserId { get; set; }

    public string Qualification { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public int LocationId { get; set; }

    public int SpecialitiesId { get; set; }

    public string Description { get; set; } = null!;

    public int Status { get; set; }

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();

    public virtual Location Location { get; set; } = null!;

    public virtual ICollection<Schedule> Schedules { get; set; } = new List<Schedule>();

    public virtual Speciality Specialities { get; set; } = null!;

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();

    public virtual User User { get; set; } = null!;
}
