import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetUsersQuery, useUpdateUserMutation } from "../../api/apiSlice";
import styles from "./ProfilePage.module.scss";
import { useDropzone } from "react-dropzone";

const ProfilePage = () => {
  const username = useSelector((state: RootState) => state.username.username);
  const { data: users, isLoading } = useGetUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  const [isEditMode, setIsEditMode] = useState(false);

  const currentUser = users?.find(user => user.username === username);

  const initialForm = {
    firstName: currentUser?.profile.firstName || "",
    lastName: currentUser?.profile.lastName || "",
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    age: currentUser?.profile.age || "",
    bio: currentUser?.profile.bio || "",
    location: currentUser?.profile.loacation || "",
    work: currentUser?.profile.work || "",
    education: currentUser?.profile.education || "",
    avatar: currentUser?.images.profile || "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);
  const [avatarPreview, setAvatarPreview] = useState(initialForm.avatar);

  useEffect(() => {
    if (currentUser) {
      const updatedForm = {
        firstName: currentUser.profile.firstName,
        lastName: currentUser.profile.lastName,
        username: currentUser.username,
        email: currentUser.email,
        age: currentUser.profile.age,
        bio: currentUser.profile.bio || "",
        location: currentUser.profile.loacation || "",
        work: currentUser.profile.work || "",
        education: currentUser.profile.education || "",
        avatar: currentUser.images.profile || "",
        password: "",
      };
      setForm(updatedForm);
      setAvatarPreview(currentUser.images.profile || "");
    }
  }, [currentUser]);

  if (isLoading) return <div className={styles["profile-page"]}>Loading...</div>
  if (!currentUser) return <div className={styles["profile-page"]}>User not found</div>;

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setForm(initialForm);
    setAvatarPreview(initialForm.avatar);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles[0]) {
      const url = URL.createObjectURL(acceptedFiles[0]);
      setForm((prev) => ({ ...prev, avatar: url }));
      setAvatarPreview(url);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const isFormChanged = Object.keys(initialForm).some((key) => {
    if (key === "password") return form.password.length > 0;
    return (
      form[key as keyof typeof form] !==
      initialForm[key as keyof typeof initialForm]
    );
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!currentUser) return;

    try {
      const updatedUser = {
        ...currentUser  ,
        username: form.username,
        email: form.email,
        profile: {
          ...currentUser.profile,
          firstName: form.firstName,
          lastName: form.lastName,
          age: Number(form.age),
          bio: form.bio,
          loacation: form.location,
          work: form.work,
          education: form.education,
        },
        images: {
          ...currentUser.images,
          profile: form.avatar,
        },
      };

      if (form.password.trim()) {
        updatedUser.password = form.password;
      }

      await updateUser({ ...updatedUser, id: currentUser.id }).unwrap();
      setIsEditMode(false);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className={styles["profile-page"]}>
      <h1>Profile Page</h1>
      
      {!isEditMode ? (
        <div className={styles["profile-card"]}>
          <div className={styles["profile-avatar"]}>
            <img 
              src={avatarPreview} 
              alt="Avatar" 
              style={{ width: 120, height: 120, borderRadius: "50%" }} 
            />
          </div>
          <div className={styles["profile-info"]}>
            <p>
              <strong>Name:</strong> {currentUser.profile.firstName} {currentUser.profile.lastName}
            </p>
            <p>
              <strong>Username:</strong> {currentUser.username}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <p>
              <strong>Age:</strong> {currentUser.profile.age}      
            </p>
            <p>
              <strong>Bio:</strong> {currentUser.profile.bio || "No bio available"}
            </p>
            <p>
              <strong>Location:</strong> {currentUser.profile.loacation || "Unknown"}
            </p>
            <p>
              <strong>Work:</strong> {currentUser.profile.work || "Not specified"}
            </p>
            <p>
              <strong>Education:</strong> {currentUser.profile.education || "Not specified"}
            </p>
          </div>
          <button onClick={handleEditClick} className={styles["edit-button"]}>
            Edit Profile
          </button>
        </div>
      ) : (
        <div className={styles["profile-card"]}>
          <form
            className={styles["edit-profile-form"]}
            onSubmit={handleSave}
          >
            <div className={styles["avatar-section"]}>
              <div {...getRootProps()} className={styles["dropzone"]}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the avatar image here...</p>
                ) : (
                  <div>
                    <img 
                      src={avatarPreview} 
                      alt="Avatar Preview" 
                      style={{ width: 120, height: 120, borderRadius: "50%" }} 
                    />
                    <p>Drag & drop a new avatar, or click to select</p>
                  </div>
                )}
              </div>
            </div>

            <div className={styles["form-fields"]}>
              <div className={styles["form-row"]}>
                <input 
                  name="firstName" 
                  value={form.firstName} 
                  onChange={handleChange} 
                  placeholder="First Name" 
                  type="text" 
                  required
                />
                <input 
                  name="lastName" 
                  value={form.lastName} 
                  onChange={handleChange} 
                  placeholder="Last Name" 
                  type="text" 
                  required
                />
              </div>
              
              <input 
                name="username" 
                value={form.username} 
                onChange={handleChange} 
                placeholder="Username" 
                type="text" 
                required
              />
              
              <input 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Email" 
                type="email" 
                required
              />
              
              <input 
                name="age" 
                value={form.age} 
                onChange={handleChange} 
                placeholder="Age" 
                type="number" 
                min="1"
                max="120"
              />
              
              <textarea 
                name="bio" 
                value={form.bio} 
                onChange={handleChange} 
                placeholder="Bio" 
                rows={3}
              />
              
              <input 
                name="location" 
                value={form.location} 
                onChange={handleChange} 
                placeholder="Location" 
                type="text" 
              />
              
              <input 
                name="work" 
                value={form.work} 
                onChange={handleChange} 
                placeholder="Work" 
                type="text" 
              />
              
              <input 
                name="education" 
                value={form.education} 
                onChange={handleChange} 
                placeholder="Education" 
                type="text" 
              />
              
              <input 
                name="password" 
                type="password" 
                value={form.password} 
                onChange={handleChange} 
                placeholder="New Password (leave empty to keep current)" 
              />
            </div>

            <div className={styles["form-actions"]}>
              <button 
                type="submit" 
                disabled={!isFormChanged}
                className={styles["save-button"]}
              >
                Save Changes
              </button>
              <button 
                type="button" 
                onClick={handleCancelEdit}
                className={styles["cancel-button"]}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
};

export default ProfilePage;