import * as React from "react"
import { useState } from "react"
import { IconUpload } from "@tabler/icons-react"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CreatePatient() {
  const [activeTab, setActiveTab] = useState("basic-info")
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGeneratePDF = () => {
    // PDF generation logic would go here
    console.log("Generating PDF...")
  }

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <h1 className="text-2xl font-bold tracking-tight">Create Patient</h1>
                <p className="text-muted-foreground">Fill out the form to register a new patient</p>
              </div>
              
              <div className="px-4 lg:px-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
                    <TabsTrigger value="medical-info">Medical Info</TabsTrigger>
                    <TabsTrigger value="visit-records">Visit Records</TabsTrigger>
                    <TabsTrigger value="additional">Additional</TabsTrigger>
                  </TabsList>
                  
                  {/* Basic Info Tab */}
                  <TabsContent value="basic-info">
                    <Card>
                      <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                        <CardDescription>Enter the patient's personal details</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-center mb-6">
                          <div className="flex flex-col items-center gap-2">
                            <Avatar className="h-24 w-24">
                              <AvatarImage src={profileImage || ""} />
                              <AvatarFallback className="bg-primary/10">
                                {profileImage ? "P" : <IconUpload className="h-8 w-8" />}
                              </AvatarFallback>
                            </Avatar>
                            <Label 
                              htmlFor="profile-picture" 
                              className="cursor-pointer text-sm text-primary hover:underline"
                            >
                              Upload Photo
                            </Label>
                            <Input 
                              id="profile-picture" 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={handleImageUpload}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="patient-id">Patient ID</Label>
                            <Input id="patient-id" placeholder="Auto-generated" disabled />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" placeholder="First name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="middle-name">Middle Name</Label>
                              <Input id="middle-name" placeholder="Middle name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" placeholder="Last name" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <Input id="dob" type="date" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="age">Age</Label>
                            <Input id="age" placeholder="Auto-calculated" disabled />
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Gender</Label>
                            <RadioGroup defaultValue="male" className="flex space-x-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Phone number" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Email address" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Textarea id="address" placeholder="Residential address" />
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="emergency-name">Emergency Contact Name</Label>
                            <Input id="emergency-name" placeholder="Contact name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergency-phone">Emergency Phone</Label>
                            <Input id="emergency-phone" placeholder="Contact phone" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergency-relation">Relation</Label>
                            <Input id="emergency-relation" placeholder="Relation to patient" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="social-media">Social Media Handle</Label>
                            <Input id="social-media" placeholder="WhatsApp/Telegram/etc." />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="language">Primary Language</Label>
                            <Select>
                              <SelectTrigger id="language">
                                <SelectValue placeholder="Select language" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="hindi">Hindi</SelectItem>
                                <SelectItem value="marathi">Marathi</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button onClick={() => setActiveTab("medical-info")}>Next</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  {/* Medical Info Tab */}
                  <TabsContent value="medical-info">
                    <Card>
                      <CardHeader>
                        <CardTitle>Medical Information</CardTitle>
                        <CardDescription>Enter the patient's medical history and current condition</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="blood-group">Blood Group</Label>
                            <Select>
                              <SelectTrigger id="blood-group">
                                <SelectValue placeholder="Select blood group" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="a_positive">A+</SelectItem>
                                <SelectItem value="a_negative">A-</SelectItem>
                                <SelectItem value="b_positive">B+</SelectItem>
                                <SelectItem value="b_negative">B-</SelectItem>
                                <SelectItem value="ab_positive">AB+</SelectItem>
                                <SelectItem value="ab_negative">AB-</SelectItem>
                                <SelectItem value="o_positive">O+</SelectItem>
                                <SelectItem value="o_negative">O-</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-2">
                              <Label htmlFor="height">Height (cm)</Label>
                              <Input id="height" type="number" placeholder="Height" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="weight">Weight (kg)</Label>
                              <Input id="weight" type="number" placeholder="Weight" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-2">
                              <Label htmlFor="blood-pressure">Blood Pressure</Label>
                              <Input id="blood-pressure" placeholder="120/80" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="heart-rate">Heart Rate (bpm)</Label>
                              <Input id="heart-rate" type="number" placeholder="Heart rate" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="medical-history">Medical History</Label>
                          <Textarea id="medical-history" placeholder="Previous conditions, surgeries, treatments..." rows={4} />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="chronic-illnesses">Chronic Illnesses</Label>
                          <Textarea id="chronic-illnesses" placeholder="Diabetes, hypertension, asthma, etc." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="medications">Current Medications</Label>
                          <Textarea id="medications" placeholder="Medication name, dosage, frequency..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="allergies">Allergies</Label>
                          <Textarea id="allergies" placeholder="Food, medicine, environmental allergies..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="family-history">Family Medical History</Label>
                          <Textarea id="family-history" placeholder="Genetic conditions or family history of chronic diseases..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="vaccination">Vaccination History</Label>
                          <Textarea id="vaccination" placeholder="List of vaccinations and dates..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="insurance">Insurance Information</Label>
                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <Input id="insurance-provider" placeholder="Insurance provider" />
                            <Input id="policy-number" placeholder="Policy number" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setActiveTab("basic-info")}>Previous</Button>
                        <Button onClick={() => setActiveTab("visit-records")}>Next</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  {/* Visit Records Tab */}
                  <TabsContent value="visit-records">
                    <Card>
                      <CardHeader>
                        <CardTitle>Visit Records</CardTitle>
                        <CardDescription>Record details of the patient's current visit</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="visit-date">Date of Visit</Label>
                            <Input id="visit-date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="reason">Reason for Visit</Label>
                          <Textarea id="reason" placeholder="Symptoms, issues, or concerns..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="diagnosis">Diagnosis</Label>
                          <Textarea id="diagnosis" placeholder="Primary diagnosis..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="prescriptions">Prescriptions</Label>
                          <Textarea id="prescriptions" placeholder="Medicines prescribed with dosage and instructions..." rows={4} />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="tests">Tests Ordered</Label>
                          <Textarea id="tests" placeholder="Labs, X-rays, MRI, etc..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="treatments">Treatments/Procedures</Label>
                          <Textarea id="treatments" placeholder="Any treatments or procedures performed during the visit..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="notes">Doctor's Notes</Label>
                          <Textarea id="notes" placeholder="Additional remarks..." rows={4} />
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="follow-up">Follow-up Date</Label>
                            <Input id="follow-up" type="date" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="next-appointment">Next Appointment</Label>
                            <Input id="next-appointment" type="datetime-local" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="referral">Referral Information</Label>
                          <Textarea id="referral" placeholder="If referred to another doctor or specialist..." />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="payment-status" />
                          <Label htmlFor="payment-status">Payment Received</Label>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setActiveTab("medical-info")}>Previous</Button>
                        <Button onClick={() => setActiveTab("additional")}>Next</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  {/* Additional Features Tab */}
                  <TabsContent value="additional">
                    <Card>
                      <CardHeader>
                        <CardTitle>Additional Information</CardTitle>
                        <CardDescription>Capture additional details and preferences</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="treatment-progress">Treatment Progress</Label>
                          <Textarea id="treatment-progress" placeholder="For chronic cases or long-term treatment tracking..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Personal Health Tracking</Label>
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex items-center space-x-2">
                              <Switch id="smoking" />
                              <Label htmlFor="smoking">Smoking</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="alcohol" />
                              <Label htmlFor="alcohol">Alcohol</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="exercise" />
                              <Label htmlFor="exercise">Regular Exercise</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="diet" />
                              <Label htmlFor="diet">Healthy Diet</Label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="health-improvements">Health Improvements/Setbacks</Label>
                          <Textarea id="health-improvements" placeholder="To keep an eye on long-term goals and adjustments to the plan..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="second-opinion">Second Opinion Notes</Label>
                          <Textarea id="second-opinion" placeholder="If a second opinion from another doctor is included..." />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="custom-notes">Custom Notes</Label>
                          <Textarea id="custom-notes" placeholder="Any special instructions or preferences about the patient..." />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="patient-portal" />
                          <Label htmlFor="patient-portal">Enable Patient Portal Access</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="medication-reminders" />
                          <Label htmlFor="medication-reminders">Enable Medication Reminders</Label>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setActiveTab("visit-records")}>Previous</Button>
                        <Button variant="default" onClick={handleGeneratePDF}>Generate PDF</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="flex justify-center px-4 pb-4 lg:px-6">
                <Button className="w-full md:w-auto" size="lg">Save Patient</Button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}